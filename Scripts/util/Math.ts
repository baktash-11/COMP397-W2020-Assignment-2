module util
{
    export class MathB
    {
        public static RandomRange(min:number, max:number)
        {
            return Math.random()*(max - min *1) + min;
        }

        public static Clamp(value:number, min:number, max:number)
        {
            if (value < min)
            {
                value = min;
            }
            else if (value > max)
            {
                value = max;
            }
        
        return value;
        }

        public static Clamp01(value:number):number
        {
            if (value < 0.0)
            {
                return 0.0;
            }
        
            if (value > 1.0)
            {
                return 1.0;
            }
            
        return value;
        }

        public static Lerp(a:number, b:number, t:number):number
        {
            return a + (b - a) * MathB.Clamp01(t);
        }

        public static LerpUnclamped(a:number, b:number, t:number):number
        {
            return a + (b - a) * t;
        }
    }
}