
const API_KEY = 'AIzaSyCbi6NEVx4VajPrsK9BgkUYtk5i4NZLYAE';


const VIDEO_ID = 'L4cth57-66k';


fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${VIDEO_ID}&key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    
    const videoStatistics = data.items[0].statistics;
    const viewsCount = videoStatistics.viewCount;
    const likesCount = videoStatistics.likeCount;

   
    console.log(`Views: ${viewsCount}`);
    console.log(`Likes: ${likesCount}`);
  })
  .catch(error => {
    console.error('Error fetching YouTube video statistics:', error);
  });