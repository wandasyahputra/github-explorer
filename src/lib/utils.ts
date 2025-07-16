import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function objectToParams(obj: Record<string, any>) {
  let searchParams = new URLSearchParams()

  for (const key in obj) {
    const value = obj[key]
    const valueIsArray = Array.isArray(obj[key])

    if (!valueIsArray && value !== null && value !== undefined && value !== '') {
      searchParams.append(key, obj[key])
    }

    if (valueIsArray && value.length > 0) {
      searchParams.append(key, obj[key])
    }
  }

  return searchParams.toString() || ''
}

