"use client";

import { useRouter } from "next/navigation";

export default function LoginActions() {
  const router = useRouter();

  return (
    <div className="flex justify-between space-x-1">
      <button
        type="submit"
        className="bg-green-600 text-white px-2 py-1 text-xs rounded-md hover:bg-green-700 transition"
      >
        Ingresar
      </button>

      <button
        type="button"
        className="bg-gray-400 text-white px-2 py-1 text-xs rounded-md hover:bg-gray-500 transition"
        onClick={() => router.push("/alta-usuario")}
      >
        Crear Cuenta
      </button>
    </div>
  );
}