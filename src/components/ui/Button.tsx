import React from "react"
import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

export default function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const base = "px-6 py-3 rounded-lg font-semibold transition duration-300"
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "border border-gray-400 hover:bg-white hover:text-black text-gray-200"
  }
  return <button className={clsx(base, styles[variant], className)} {...props} />
}
