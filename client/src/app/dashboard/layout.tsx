"use client"

import React from 'react'

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className="flex flex-col min-h-screen bg-black text-white">
          <main className="flex-grow">{children}</main>
        </body>
      </html>
    );
  }