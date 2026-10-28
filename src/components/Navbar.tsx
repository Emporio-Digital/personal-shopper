"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 md:h-24 flex items-center justify-between">
          
          {/* LADO ESQUERDO: LOGO + NOME DA MARCA */}
          <a href="#" className="flex items-center gap-1.5 md:gap-2 group">
            <div className="relative flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col">
              <div className="text-lg md:text-2xl font-black tracking-tight text-neutral-900 flex items-center gap-1 leading-none">
                IMPORTS<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">PARAGUAI</span>
              </div>
              <span className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-neutral-400 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                Personal Shopper Oficial
              </span>
            </div>
          </a>

          {/* CENTRO: LINKS DE NAVEGAÇÃO COM MAIS PESO & PRESENÇA */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              href="/"
              className="text-sm lg:text-[15px] font-extrabold text-neutral-900 hover:text-blue-600 transition-colors tracking-tight relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Início
            </Link>
            <a
              href="#como-funciona"
              className="text-sm lg:text-[15px] font-extrabold text-neutral-900 hover:text-blue-600 transition-colors tracking-tight relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Como Funciona
            </a>
            <a
              href="#categorias"
              className="text-sm lg:text-[15px] font-extrabold text-neutral-900 hover:text-blue-600 transition-colors tracking-tight relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Categorias
            </a>
            <a
              href="#metodo"
              className="text-sm lg:text-[15px] font-extrabold text-neutral-900 hover:text-blue-600 transition-colors tracking-tight relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Método
            </a>
          </nav>

          {/* LADO DIREITO: BOTÃO DE COTAÇÃO COM ÍCONE GRANDE E VISÍVEL */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5511916053292?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Imports%20Paraguai%20e%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 px-7 py-3 text-sm uppercase tracking-wider font-black text-white bg-neutral-950 hover:bg-neutral-900 rounded-full shadow-lg shadow-neutral-950/20 hover:shadow-cyan-950/15 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-neutral-800 group"
            >
              <svg 
                className="w-7 h-7 min-w-[28px] min-h-[28px] fill-current text-[#25D366] shrink-0 group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.549-.68.116-.173.232-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
              </svg>
              <span className="leading-none pt-0.5">Pedir Cotação</span>
            </a>
          </div>

          {/* BOTÃO HAMBÚRGUER / FECHAR (MOBILE) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-800 hover:text-black focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </header>

      {/* OVERLAY ESCURO (FICA ABAIXO DO HEADER) */}
      <div 
        className={`fixed top-20 inset-x-0 bottom-0 bg-black/50 backdrop-blur-xs z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* PAINEL LATERAL (SLIDE DA DIREITA, ALINHADO AO BOTÃO HAMBÚRGUER) */}
      <div
        className={`fixed top-20 right-0 w-[85%] max-w-xs bg-white rounded-bl-3xl shadow-2xl z-40 md:hidden transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 flex flex-col">
          {/* LISTA DE LINKS COM O "+" NA DIREITA IGUAL AO PRINT */}
          <nav className="flex flex-col divide-y divide-neutral-100">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-4 text-[16px] font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
            >
              <span>Início</span>
              <span className="text-neutral-300 text-lg font-light">+</span>
            </Link>

            <a
              href="#como-funciona"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-4 text-[16px] font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
            >
              <span>Como Funciona</span>
              <span className="text-neutral-300 text-lg font-light">+</span>
            </a>

            <a
              href="#categorias"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-4 text-[16px] font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
            >
              <span>Categorias</span>
              <span className="text-neutral-300 text-lg font-light">+</span>
            </a>

            <a
              href="#metodo"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-4 text-[16px] font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
            >
              <span>Método</span>
              <span className="text-neutral-300 text-lg font-light">+</span>
            </a>
          </nav>

          {/* BOTÃO CTA INFERIOR */}
          <div className="pt-6">
            <a
              href="https://wa.me/5511916053292?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Imports%20Paraguai%20e%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-5 text-sm uppercase tracking-wider font-extrabold text-white bg-neutral-950 rounded-full shadow-lg active:bg-neutral-800"
            >
              <svg 
                className="w-6 h-6 fill-current text-[#25D366] shrink-0" 
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.549-.68.116-.173.232-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
              </svg>
              <span>Pedir Cotação</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}