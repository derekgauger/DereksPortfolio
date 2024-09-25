import React, { useEffect, useRef, useState } from 'react';
import { Bodies, Engine, Render, Runner, World, Mouse, MouseConstraint, Body, Events, Vector } from 'matter-js';
import Matter from 'matter-js';

const PhysicsSimulation: React.FC = () => {
    const scene = useRef<HTMLDivElement | null>(null);
    const engine = useRef(Engine.create());
    const mousePosition = useRef({ x: 0, y: 0 });
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    const MAX_SPEED = 25;
    const WALL_THICKNESS = Math.max(10, Math.min(20, dimensions.width * 0.02)); // Responsive wall thickness
    const PADDING = Math.max(5, Math.min(10, dimensions.width * 0.01)); // Responsive padding
    const INITIAL_SPEED = Math.min(5, dimensions.width * 0.005); // Responsive initial speed
    const ATTRACTION_STRENGTH = Math.min(0.0000005, dimensions.width * 0.0000000005);
    const MAX_ATTRACTION_DISTANCE = Math.min(200, dimensions.width * 0.2); // Responsive attraction distance

    // Function to limit the speed of a body
    const limitSpeed = (body: Matter.Body) => {
        const velocity = body.velocity;
        const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
        if (speed > MAX_SPEED) {
            const ratio = MAX_SPEED / speed;
            Body.setVelocity(body, {
                x: velocity.x * ratio,
                y: velocity.y * ratio
            });
        }
    };

    // Function to generate a random velocity
    const getRandomVelocity = () => {
        const angle = Math.random() * 2 * Math.PI;
        return Vector.create(
            INITIAL_SPEED * Math.cos(angle),
            INITIAL_SPEED * Math.sin(angle)
        );
    };

    // Function to attract bodies to the mouse
    const attractToMouse = (body: Matter.Body) => {
        const direction = Vector.sub(mousePosition.current, body.position);
        const distance = Vector.magnitude(direction);
        
        if (distance < MAX_ATTRACTION_DISTANCE) {
            const force = Vector.mult(
                Vector.normalise(direction),
                ATTRACTION_STRENGTH * body.mass * (MAX_ATTRACTION_DISTANCE - distance)
            );
            Body.applyForce(body, body.position, force);
        }
    };

    useEffect(() => {
        const cw = dimensions.width - 2 * PADDING;
        const ch = dimensions.height - 2 * PADDING;
      
        if (!scene.current) return;

        // Clear the previous world if it exists
        World.clear(engine.current.world, false);
        Engine.clear(engine.current);
        
        // Set gravity to 0
        engine.current.gravity.y = 0;

        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: cw,
                height: ch,
                wireframes: false,
                background: 'transparent'
            }
        });
          
        // Create boundaries
        const wallOptions = { 
            isStatic: true, 
            render: { 
                fillStyle: 'none'
            }
        };

        // Create walls
        const walls = [
            Bodies.rectangle(cw / 2, WALL_THICKNESS / 2, cw + WALL_THICKNESS, WALL_THICKNESS, wallOptions),
            Bodies.rectangle(WALL_THICKNESS / 2, ch / 2, WALL_THICKNESS, ch + WALL_THICKNESS, wallOptions),
            Bodies.rectangle(cw / 2, ch - WALL_THICKNESS / 2, cw + WALL_THICKNESS, WALL_THICKNESS, wallOptions),
            Bodies.rectangle(cw - WALL_THICKNESS / 2, ch / 2, WALL_THICKNESS, ch + WALL_THICKNESS, wallOptions)
        ];

        // Function to generate a shade of a given color
        const generateShade = (color: string, factor: number) => {
            const [r, g, b] = color.match(/\w\w/g)!.map((c) => parseInt(c, 16));
            const newR = Math.min(255, Math.round(r * factor));
            const newG = Math.min(255, Math.round(g * factor));
            const newB = Math.min(255, Math.round(b * factor));
            return `rgb(${newR}, ${newG}, ${newB})`;
        };

        // Input color
        const inputColor = "#3db84b";

        // Create initial shapes (circles, triangles, hexagons)
        const numCircles = Math.floor(20 * (cw * ch) / (1920 * 1080));
        const numTriangles = Math.floor(15 * (cw * ch) / (1920 * 1080));
        const numHexagons = Math.floor(15 * (cw * ch) / (1920 * 1080));

        // Create initial shapes with responsive sizes
        const shapes = [
            ...Array(numCircles).fill(null).map((_, index) => 
                Bodies.circle(
                    PADDING + Math.random() * (cw - 2 * PADDING),
                    100 + Math.random() * (ch - 100 - PADDING),
                    10 + Math.random() * Math.min(20, cw * 0.02),
                    {
                        mass: 10,
                        restitution: 0.9,
                        friction: 0.005,
                        render: {
                            fillStyle: generateShade(inputColor, 1 - index * 0.05)
                        }
                    }
                )
            ),
            ...Array(numTriangles).fill(null).map((_, index) => 
                Bodies.polygon(
                    PADDING + Math.random() * (cw - 2 * PADDING),
                    100 + Math.random() * (ch - 100 - PADDING),
                    3,
                    25 + Math.random() * Math.min(20, cw * 0.02),
                    {
                        mass: 10,
                        restitution: 0.9,
                        friction: 0.005,
                        render: {
                            fillStyle: generateShade(inputColor, 1 - index * 0.05)
                        }
                    }
                )
            ),
            ...Array(numHexagons).fill(null).map((_, index) => 
                Bodies.polygon(
                    PADDING + Math.random() * (cw - 2 * PADDING),
                    100 + Math.random() * (ch - 100 - PADDING),
                    6,
                    40 + Math.random() * Math.min(20, cw * 0.02),
                    {
                        mass: 10,
                        restitution: 0.9,
                        friction: 0.005,
                        render: {
                            fillStyle: generateShade(inputColor, 1 - index * 0.05)
                        }
                    }
                )
            )
        ];

        shapes.forEach(shape => Body.setVelocity(shape, getRandomVelocity()));

        World.add(engine.current.world, [...walls, ...shapes]);


          
        // Create a runner
        const runner = Runner.create();

        // Run the engine
        Runner.run(runner, engine.current);
        Render.run(render);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine.current, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        World.add(engine.current.world, mouseConstraint);

        // Update mouse position
        Events.on(mouseConstraint, 'mousemove', function(event) {
            const position = event.mouse.position;
            mousePosition.current = { x: position.x, y: position.y };
        });

        // Prevent scrolling on canvas
        let scrollTimeout: NodeJS.Timeout;
        function handleScroll() {
            render.canvas.style.pointerEvents = "none";
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              render.canvas.style.pointerEvents = "auto";
            }, 200);
          }
            
        render.canvas.addEventListener("wheel", handleScroll);

        // Apply speed limit and attraction to all bodies after each update
        Events.on(engine.current, 'afterUpdate', () => {
            engine.current.world.bodies.forEach(body => {
                if (!body.isStatic) {
                    limitSpeed(body);
                    attractToMouse(body);
                }
            });
        });

        // Cleanup
        return () => {
            Render.stop(render);
            World.clear(engine.current.world, true);
            Engine.clear(engine.current);
            render.canvas.remove();
            render.canvas = null as unknown as HTMLCanvasElement;
            render.context = null as unknown as CanvasRenderingContext2D;
            render.textures = {};
            Runner.stop(runner);
        };
    }, [dimensions]);

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='overflow-hidden w-full h-full flex items-center justify-center'>
            <div ref={scene} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default PhysicsSimulation;