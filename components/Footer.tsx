import React from "react";

const Footer = () => {
    return (
        <footer className="w-full h-full md:h-44 bg-[#14161a] border-t border-[#2a2a2e] py-6 mt-10">
            <div className="w-full mx-auto flex flex-col space-y-4 items-center justify-between px-4 text-gray-400 text-sm md:text-lg">
                <span>
                    © {new Date().getFullYear()} Sneaky. Все права защищены.
                </span>
                <nav className="flex flex-col md:flex-row gap-4 mt-2 md:mt-0 items-center">
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition">Главная</a>
                        <a href="#" className="hover:text-white transition">Продукты</a>
                        <a href="#" className="hover:text-white transition">О нас</a>
                        <a href="#" className="hover:text-white transition">Контакты</a>
                    </div>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-white transition">Импрессум</a>
                        <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
                    </div>
                </nav>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Инстаграм" className="hover:text-white transition">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788 2.279 6.068 2.266 6.477 2.266 12c0 5.523.013 5.932.072 7.212.058 1.278.33 2.451 1.297 3.418.967.967 2.14 1.239 3.418 1.297C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.278-.058 2.451-.33 3.418-1.297.967-.967 1.239-2.14 1.297-3.418.059-1.28.072-1.689.072-7.212 0-5.523-.013-5.932-.072-7.212-.058-1.278-.33-2.451-1.297-3.418C19.399.402 18.226.13 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Фейсбук" className="hover:text-white transition">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Твиттер" className="hover:text-white transition">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
