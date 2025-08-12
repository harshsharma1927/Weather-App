import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './infobox.css';



export default function InfoBox({info}){
    const init_url ="https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image = {init_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Temperature = {info.temp}&deg;C</div>
            <div>Feels Like = {info.feelslike}&deg;C</div>
            <div>Min Temperature = {info.tempmin}&deg;C</div>
            <div>Max Temperature = {info.tempmax}&deg;C</div>
            <div>Humidity = {info.humidity}%</div>
            <div>Description: The Weather Forcast says
            
                "{info.description}"</div>
        </Typography>
      </CardContent>

    </Card>
    </div>
        </div>
    );
}