<%-- 
    Document   : index
    Created on : 27 ago 2025, 07:46:15
    Author     : informatica
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Juego de Rompecabeza</title>
        <link rel="stylesheet" href="css/estilo.css">
    </head>
    <body>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>

        <div class="container">
            <h2>Rompecabezas de imagen vectorial (4x4)</h2>
            <p>Haz click en una imagen adyacente al espacio vacío para moverlo hacia el mismo.</p>

            <div class="contenido">
                <div id="imagen" class="imagen">
                    <img src="img/imagenRef.jpeg" >
                </div>

                <div class="juego">
                    <div id="puzzle" class="puzzle" ></div>
                    <div id="contador">Tiempo: 2:00</div>
                </div>
            </div>

            <p id="mensaje"></p>

            <button type="button" class="button" onclick="reiniciar()">
                <span class="button__text">Reiniciar</span>
                <span class="button__icon"><svg class="svg" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"></path><path d="M0 0h48v48h-48z" fill="none"></path></svg></span>
            </button>

            <button type="button" class="button" onclick="resolver()">
                <span class="button__text">Rendirse</span>
                <span class="button__icon">
                    <svg class="svg" height="48" viewBox="0 0 48 48" width="100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 24l10 10L38 14" stroke="white" stroke-width="4" fill="none" />
                    </svg>
                </span>
            </button>
        </div>

        <script src="js/script.js"></script>
    </body>
</html>
