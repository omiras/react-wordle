# Wordle React

## Tecla - Componente Key

Para el backspace puedes usar:

```
 <Key><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
          <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
        </svg></Key>
```

Implementa el componente Key. ¿Cómo podemos hacer para renderizar todas las teclas de golpe sin tener que copiar/pegar 23 `<Key>h<Key>` ?

## Tecla - Gestión del evento onClick

- Que ocurre al gestionar el evento onClick en Key
- Cómo podemos informar a nuestro padre que hemos sido pulsados
- ¿Valdría la pena añadir una propiedad?

## Letter - Componente Letter

El componente Letter debe recibir una propiedad, que indica la letra que contiene . Además, debemos pasarle otra propiedad para indicar el color de fondo

`<Letter letter="A" bgColor="green" />`
`<Letter letter="B" bgColor="#cccccc" />`
`<Letter letter="C" bgColor="orange" />`

La primera debería renderizar:
<img src="https://oscarm.tinytake.com/media/148ec5a?filename=1686068164700_TinyTake06-06-2023-06-15-56_638216649637577433.png&sub_type=thumbnail_preview&type=attachment&width=80&height=77" title="Powered by TinyTake Screen Capture"/><br>

Para hacerlo sencillo, primero vamos a renderizar simplemente 5

## Estado

Necesitamos 2 variables de estado

1. La palabra del día correcta
2. La palabra que está escribiendo el usuario
