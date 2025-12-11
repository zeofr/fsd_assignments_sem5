const movie = {
  title: 'Puff the Magic Dragon',
  duration: 30,
  stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(m) {
  console.log(`${m.title} lasts for ${m.duration} minutes. Stars: ${m.stars.join(', ')}.`);
}

printMovie(movie);
