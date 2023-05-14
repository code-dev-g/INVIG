import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authHandle, storeHandle } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { Box, Typography, Button, Select, MenuItem, TextField, Container } from "@mui/material";
import { useFormik } from "formik";
import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import BrandCard from "../components/BrandCard";


const LoginForm = () => {

    const router = useRouter();

    const user = authHandle.currentUser;

    const formik = useFormik( {
        initialValues: {
            email: "",
            password: "",
            type: "faculty",
        },
        validationSchema: Yup.object( {
            email: Yup.string()
                .email( "Invalid email address" )
                .required( "Email address is required" ),
            password: Yup.string()
                .min( 6, "Password must be at least 6 characters" )
                .required( "Password is required" ),
            type: Yup.string().required(),
        } ),
        onSubmit: async ( values, { setSubmitting, setFieldError } ) => {
            const { email, password, type } = values;

            console.log( type );

            try {
                await signInWithEmailAndPassword( authHandle, email, password );

                const user = authHandle.currentUser;

                console.log( user );

                const docRef = doc( storeHandle, "usertype", user.uid );
                const docSnap = await getDoc( docRef );

                if ( docSnap.exists() ) {
                    console.log( "Document data:", docSnap.data() );
                    if ( docSnap.data().type === type ) {
                        if ( type === "faculty" ) {
                            router.push( '/faculty' );
                        }
                        if ( type === "admin" ) {
                            router.push( '/admin' );
                        }
                    }
                    else {
                        signOut( authHandle );
                        alert( "You are not authorized to access this page" );
                    }
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log( "No such document!" );
                }

                // router.push('/');
            } catch ( error ) {
                console.error( error );
                setFieldError( "email", error.message );
            }

            setSubmitting( false );
        },
    } );

    if ( user ) {
        return (
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh',
                } }
            >
                <Typography variant="h5">
                    Already signed in as { user.email }
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={ () => {
                        signOut( authHandle );
                        router.push( '/' );
                    } }
                    sx={ {
                        margin: '1rem',
                    }}
                >
                    Sign Out
                </Button>
            </Box>
        );
    } else {
        return (
            <>
                <Head>
                    <title>Sign In - INVIG</title>
                </Head>
                <Container
                    sx={ {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "80vh",
                    } }
                >
                    <BrandCard />
                    <form onSubmit={ formik.handleSubmit } style={ { display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem" } }>
                        <Typography variant="h3" style={ { marginBottom: "16px" } }>Sign In</Typography>
                        <TextField
                            id="email"
                            name="email"
                            label="Email address"
                            variant="outlined"
                            style={ { marginBottom: "18px", width: "300px" } }
                            value={ formik.values.email }
                            onChange={ formik.handleChange }
                            onBlur={ formik.handleBlur }
                            error={ formik.touched.email && Boolean( formik.errors.email ) }
                            helperText={ formik.touched.email && formik.errors.email }
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            style={ { marginBottom: "18px", width: "300px" } }
                            value={ formik.values.password }
                            onChange={ formik.handleChange }
                            onBlur={ formik.handleBlur }
                            error={ formik.touched.password && Boolean( formik.errors.password ) }
                            helperText={ formik.touched.password && formik.errors.password }
                        />
                        <Select
                            id="type"
                            name="type"
                            style={ { marginBottom: "18px", width: "300px" } }
                            value={ formik.values.type }
                            onChange={ formik.handleChange }
                        >
                            <MenuItem value="faculty">Faculty</MenuItem>
                            <MenuItem value="admin">Admin</MenuItem>
                        </Select>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={ { marginBottom: "18px" } }
                            disabled={ formik.isSubmitting }
                        >
                            Sign In
                        </Button>
                        <Button
                            type="button"
                            variant="outlined"
                            onClick={ () => {
                                router.push( '/forgotpassword' );
                            } }
                        >
                            Forgot password?
                        </Button>
                    </form>
                </Container>
            </>
        );
    }
};

export default LoginForm;