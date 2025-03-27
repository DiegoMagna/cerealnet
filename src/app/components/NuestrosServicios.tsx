"use client";

import React from "react";

const servicios = [
  {
    titulo: "CerealNet",
    descripcion: "Portal de gestión que centraliza la información de camiones descargados en puertos, permitiendo a entregadores, corredores y otros intervinientes acceder a datos en tiempo real.",
  },
  {
    titulo: "Puertos Online",
    descripcion: "Sistema que brinda información en línea sobre el estado operativo de los puertos, permitiendo un monitoreo eficiente y la toma de decisiones en tiempo real.",
  },
  {
    titulo: "Gestión de Entrega y Exportación de Cereales",
    descripcion: "Sistema integral para administrar la logística y documentación de entregas y exportaciones de granos, optimizando tiempos y reduciendo errores en la operatoria.",
  },
  {
    titulo: "Sistema de Recepción de Cereales",
    descripcion: "Herramienta que gestiona la descarga de camiones en puertos y plantas, asegurando un control eficiente de volúmenes, tiempos y calidad del cereal recibido.",
  },
  {
    titulo: "Sistema de Facturación",
    descripcion: "Solución diseñada para la emisión y gestión de facturas dentro del sector agropecuario, con integración a normativa vigente y automatización de procesos contables.",
  },
  {
    titulo: "Sistema de Gestión Contable",
    descripcion: "Plataforma que facilita la administración financiera de empresas del agro, permitiendo un control preciso de costos, ingresos y egresos.",
  },
  {
    titulo: "Sistema de Embarques",
    descripcion: "Optimiza la planificación y seguimiento de embarques de cereales, asegurando el cumplimiento de contratos y la coordinación con puertos y transportistas.",
  },
  {
    titulo: "Digitalización de Carta de Porte y Ticket",
    descripcion: "Transforma la gestión documental mediante la digitalización de cartas de porte y tickets de pesaje, reduciendo tiempos administrativos y errores operativos.",
  },
  {
    titulo: "Sistema de Confección de Carta de Porte",
    descripcion: "Plataforma que agiliza la generación y administración de cartas de porte, asegurando el cumplimiento normativo y facilitando el control del transporte de granos.",
  },
  {
    titulo: "Módulo de Alertas de WhatsApp Automático",
    descripcion: "Sistema adaptable para cualquier plataforma, que permite el envío de notificaciones automáticas por WhatsApp sobre eventos clave.",
  },
  {
    titulo: "App de CerealNet",
    descripcion: "Aplicación móvil que permite acceder a la misma operativa del portal desde el celular, facilitando la gestión en cualquier momento y lugar.",
  },
  {
    titulo: "App de Puertos Online",
    descripcion: "Versión móvil del sistema de Puertos Online, que brinda información en tiempo real sobre el estado de los puertos y permite operar de manera ágil desde dispositivos móviles.",
  },
];

const NuestrosServicios = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-[#3d3623] text-center mb-8">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 transition transform hover:-translate-y-2 hover:shadow-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-[#3d3623] hover:text-green-600 transition-colors">
              {servicio.titulo}
            </h3>
            <p className="text-gray-600 mt-2">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NuestrosServicios;
