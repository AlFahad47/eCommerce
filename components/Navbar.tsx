'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Navbar() {
    const { data: session } = useSession();


console.log(session)


    const navLinks = (
        <>
            <Link href="/" >Home</Link>
            <Link href="/products" >Products</Link>
            <Link href="/about" >About Us</Link>
            <Link href="/dashboard/add" >Add Product</Link>



        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  "
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <Link
                        href="/"
                        className="flex justify-center items-center font-bold "
                    >
                        <img className="h-10 w-10 mr-2  rounded-full" src="/logo.jpg" alt="" />
                        e Commerce
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex nav-new">
                    <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
                </div>
                <div className="navbar-end">


                    {/* profile */}

                    {session? (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={session.user?.image}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                                >
                                    <li>
                                        <a>{session.user?.name}</a>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/manage" >Manage Products</Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/add" >Add Product</Link>
                                    </li>

                                    <li>
                                        <p onClick={() => signOut({callbackUrl: '/login'})}>Logout</p>
                                    </li>
                                </ul>
                            </div>
                        ) :
                        <Link href="/login">Login</Link>
                    }

                        </div>
                        </div>
                        </div>
                        );
}