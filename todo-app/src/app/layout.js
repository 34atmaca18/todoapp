'use client'

import { TodoProvider } from './components/TodoContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
          <TodoProvider>
            {children}
          </TodoProvider>
      </body>
    </html>
  );
}
