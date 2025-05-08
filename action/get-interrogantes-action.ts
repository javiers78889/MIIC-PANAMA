const interrogantes = {
    Qué: "Se utiliza para identificar, describir o definir un fenómeno, concepto, hecho o situación",
    Cuál: "Se usa para seleccionar o identificar elementos específicos dentro de un conjunto conocido",
    Cuáles: "Se usa para seleccionar o identificar elementos específicos dentro de un conjunto conocido",
    Cómo: "Se enfoca en el procedimiento, la manera o el modo en que ocurre un fenómeno o proceso",
    "Por qué": "Busca explicar las causas, motivos o razones de un hecho o fenómeno",
    "Para qué": "Indaga sobre la finalidad o propósito de un hecho, acción o fenómeno",
    Quién: "Se refiere a las personas involucradas en un hecho, fenómeno o situación",
    Quiénes: "Se refiere a las personas involucradas en un hecho, fenómeno o situación",
    Dónde: "Interroga sobre el lugar o espacio donde ocurre un hecho o fenómeno",
    Cuándo: "Se refiere al momento o periodo temporal en el que ocurre un evento o situación",
    Cuánto: "Se utiliza para cuantificar elementos, frecuencias, proporciones o niveles",
    Cuántos: "Se utiliza para cuantificar elementos, frecuencias, proporciones o niveles",
    "Con qué": "Interroga sobre los recursos, herramientas o medios utilizados para realizar algo",
    "A través de qué": "Indaga sobre los canales, procesos o mecanismos por los cuales ocurre un fenómeno",
    "Hasta qué punto": "Permite evaluar el grado, intensidad o límite de un fenómeno o efecto",
    "En qué medida": "Se utiliza para analizar la proporción, impacto o alcance de algo",
    "Bajo qué condiciones": "Explora los contextos o situaciones específicas en las que se manifiesta un fenómeno",
    "Según quién": "Examina diferentes perspectivas, percepciones u opiniones sobre un tema",
    "De qué manera": "Variante de '¿Cómo?', más frecuente en investigaciones cualitativas, centrada en el enfoque o estilo del proceso",
    "Con quién": "Indaga sobre los actores o grupos con los que se lleva a cabo una acción o fenómeno",
    "Desde dónde": "Explora la perspectiva, enfoque o punto de partida desde el cual se observa o analiza un fenómeno",   
}

export const interrogantesArray = Object.entries(interrogantes).map(([key, value]) => ({
    palabra: key,
    descripcion: value
}));