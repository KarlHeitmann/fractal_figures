# Fibonacci Figures

This is a sample project only for fun and to experiment with Vue.JS. I've choosen Vue.JS because
it is a technology I don't master yet, but I'm very curious about it. So it's a great opportunity to
tinker it. AFAIK, in Vue it is very simple to take a existent web page and take a little part of it
and add a Vue Component.

This feature would make this webapp a great fit to put on my personal web page at github. Because by
one side, anyone could work on the project by cloning it and running it, and by the other side, one could
embed the fibonacci component to it's personal web page.

On my personal webpage, I like to post my own articles and studies. Fractals are one of the topics that I
like the most. And it makes some pretty pictures. Here are some results:

![image](https://user-images.githubusercontent.com/3003032/119545057-58d81b80-bd60-11eb-89c9-3490dd672fe5.png)

![image](https://user-images.githubusercontent.com/3003032/119545128-773e1700-bd60-11eb-9bc3-46788d8bcfe6.png)

Try to tinker on the file `fractal_figures/fractals/fibonacci_word.js` to draw different figures. In addition,
stare closely to the whole picture. You will see that some patterns emerge from the drawings. It's very fun!

# Acknowledgment.

This work will not being possible without the [paper](https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2020-2021/Makalah/Makalah-Matdis-2020%20(123).pdf) written by **Alvin Rizqi Alfisyahrin**. It is very interesting, and the first fractal he named on his work is this one.
I've always wanted to make a computer program to draw some fractals, the Mandelbrot fractal is very important, and it
has quite a lot of interesting properties. But compared to the Fibonacci Word, the Mandelbrot is quite difficult to write.
The Fibonacci Word fractal is simpler. It has a few rules, you don't have to measure anything, and you simply draw a little
step and then you have to choose to turn right or left.

I remember back on the old days when in junior school I've had to write a program with a turtle on the 90's. I understand
that today there are some softwares alike that run on raspberry pi. Maybe this algorithm could be a good way to approach kids to code.

# The Code.

The folder `fractal_figures` under this folder should be named `fibonacci_word`. This folder has a project on Vue.JS. You have
to switch to this folder and look at `package.json` file to see what script you have to run in order to run the app. On the folder
you have the `src` folder which has the source code to draw the fibonacci word on a web page.

## Description of the `src` folder and it's source files.

- `src/main.js`: entry point for the app. It loads the `App.vue` file
- `src/Vue.js`: the main component file. It loads some style that came by default with Vue.js, and then the `/components/Fractals.vue` component, 
    that has the main layout for the component.
- `src/components/`:
    - `Fractals.vue`: main layout for the component. It has two subcomponents and a <canvas> to draw the fractalm, this component needs to
        communicate with it's subcomponents to read some variables that are handled by them.
    - `Header.vue`: It's the header that is displayed above the canvas. Once in a commit it used to display the complete fibonacci string
       that will be drawed on the canvas. But at some point this feature got broken. I'm kinda lazy now to restore it.
    - `Sidebar.vue`: It's the most important subcomponent of `Fractals.vue`, it's purpose it's to show the user some buttons, sliders, and inputs so
       he can draw different fibonacci word on different sectors of the canvas, with different sizes.
- `src/fractals/fibonacci_word.js`:
    - This is the core of the app. On the beginning I thought that the folder `src/fractals/` would contain all the drivers to draw different fractals.
        later on when I started working on fibonacci_word, I changed my mind and thought better to write a different vue component for every different
        fractal, since the different fractals may have very different parameters to tinker. The `fibonacci_word.js` contains a `Brush` class
        that acts like the brush that will paint the fractal on the HTML canvas. It has a very important attribute called `inteligencia` => `intelligence`
        (I know, it's to call too much a thing intelligent, I must fix its name sooner), it is a Nort - South - East - West object, that will 
        turn 90 degrees clockwise or counterclockwise if a `1` or `0` character is passed to this object. It also has a `x` and `y` attributes that have 
        the current point on the canvas, and the `x_next` and `y_next` attributes that have the next coordinate on the canvas upon which will the next line
        will be painted.


