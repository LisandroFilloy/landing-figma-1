import useMeasure from "react-use-measure";
import { useEffect } from "react";
import { useMotionValue, animate, motion } from "motion/react";

function ReviewCard(props: {index: number}) {
    const {index} = props;
    return (
        <div className="overflow-hidden relative shadow-[4px_4px_0px_0px_black] xl:w-[600px] md:w-[500px] w-[450px] rounded-lg border-black border-2 flex gap-4 items-center justify-center h-60">
          <div className="bg-gray-200 flex-1 h-full flex"></div>
          <div className="flex flex-col p-5 flex-1">
            <h1 className='font-bold'>{index} Lorem Ipsum</h1>
            <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
          </div>
        </div>
    )
  }


export function SliderLeft() {
    const [ref, {width}] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        const finalPosition = width /2 -16;

        const controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        })

        return controls.stop;
    }, [xTranslation, width])


    return (
        <div className="overflow-hidden">
            <motion.div className="gap-8 flex w-max" ref={ref} style={{ x: xTranslation }}>
                <ReviewCard index={1}/>
                <ReviewCard index={2}/>
                <ReviewCard index={3}/>
                <ReviewCard index={4}/>
                <ReviewCard index={1}/>
                <ReviewCard index={2}/>
                <ReviewCard index={3}/>
                <ReviewCard index={4}/>
            </motion.div>
        </div>
    )

}

export function SliderRight() {
    const [ref, {width}] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        const finalPosition = width /2 + 16;
        const controls = animate(xTranslation, [-finalPosition, 0], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        })

        return controls.stop;
    }, [xTranslation, width])


    return (
        <div className="overflow-hidden">
            <motion.div className="gap-8 flex w-max" ref={ref} style={{ x: xTranslation }}>
                <ReviewCard index={1}/>
                <ReviewCard index={2}/>
                <ReviewCard index={3}/>
                <ReviewCard index={4}/>
                <ReviewCard index={1}/>
                <ReviewCard index={2}/>
                <ReviewCard index={3}/>
                <ReviewCard index={4}/>
            </motion.div>
        </div>
    )

}