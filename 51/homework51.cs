namespace homework51 {
    public class Shirt {
        public string Color { get; set; }
        public string Pattern { get; set; }

        public Shirt(string color, string pattern)
        {
            Color = color;
            Pattern = pattern;
        }
    }
    public class Program {
        static void Main(string[] args)
        {
            string[] colors = {"red","green","blue"};
            string[] patterns = {"striped","checked","plain"};
            foreach (string color in colors)
            {
                foreach (string pattern in patterns)
                {
                    Shirt shirt = new Shirt(color, pattern);
                    Console.WriteLine($"{shirt.Color}:{shirt.Pattern}");
                }
            }
        }
    }
}