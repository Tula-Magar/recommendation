import React from "react";

export default function TopAnimatedMovies() {
  // List of the top ten animated movies with descriptions
  const topAnimatedMovies = [
    {
      title: "Spirited Away (2001)",
      description:
        "A young girl named Chihiro becomes trapped in a mysterious and magical world. She must navigate this strange place to rescue her parents and find her way back home.",
    },
    {
      title: "Toy Story (1995)",
      description:
        "In a world where toys come to life when humans are not around, Woody, a pull-string cowboy doll, and Buzz Lightyear, a space action figure, embark on an adventure to get back to their owner.",
    },
    {
      title: "The Lion King (1994)",
      description:
        "Simba, a young lion cub, must learn to embrace his destiny and reclaim his throne as the king of the Pride Lands after a tragic event forces him into exile.",
    },
    {
      title: "Finding Nemo (2003)",
      description:
        "Marlin, a clownfish, embarks on a journey across the ocean to find his son, Nemo, who has been captured by a diver and placed in a fish tank in a dentist's office.",
    },
    {
      title: "Coco (2017)",
      description:
        "Miguel, a young aspiring musician, finds himself in the Land of the Dead on Dia de los Muertos. He sets out on a quest to discover his family's history and pursue his musical dreams.",
    },
    {
      title: "Zootopia (2016)",
      description:
        "Judy Hopps, a determined bunny police officer, teams up with a sly fox, Nick Wilde, to solve a mystery in the bustling city of Zootopia, where predator and prey live together.",
    },
    {
      title: "Inside Out (2015)",
      description:
        "Meet the emotions inside the mind of an 11-year-old girl named Riley as they navigate her life's challenges, joys, and emotions in this heartwarming and imaginative story.",
    },
    {
      title: "WALL-E (2008)",
      description:
        "In a future where Earth is abandoned by humans due to pollution, WALL-E, a small waste-collecting robot, discovers a new purpose when he meets another robot named EVE.",
    },
    {
      title: "Shrek (2001)",
      description:
        "Shrek, an ogre who just wants to be left alone, embarks on a quest to rescue Princess Fiona and ends up on a hilarious adventure filled with fairy tale characters and humor.",
    },
    {
      title: "Frozen (2013)",
      description:
        "Follow the journey of sisters Anna and Elsa in the kingdom of Arendelle. Elsa has magical ice powers, and when she accidentally plunges Arendelle into eternal winter, Anna sets out to bring her back.",
    },
  ];

  return (
    <div>
      <h1>Top 10 Animated Movies</h1>
      <ul>
        {topAnimatedMovies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
