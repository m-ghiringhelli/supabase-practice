const SUPABASE_URL = 'https://qurnakdkijnyhcuzbmgb.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1cm5ha2RraWpueWhjdXpibWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NDMsImV4cCI6MTk1OTkxNzQ0M30.IltjE-P3qd05gdR8QTQqmRASPhJmLREfwTW5uFWm7c8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
    const resp = await client.from('movies').select('*');
    return checkError(resp);
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
}

export async function getDirectorNames() {
  // return the list of the director's names
}

export async function getMovieById(id) {
  // return the movie with the given id
}

export async function getMovieByTitle(title) {
  // return the movie with the given title
    const resp = await client
    .from('movies)'
    .select('*');
    .like('title', title)
    .single();
  console.log('getMovieByTitle', resp);
  return checkError(resp;)
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
