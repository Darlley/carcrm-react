import { Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
import Box from '@mui/material/Box';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const App = () => {
  return (
    <Container maxWidth="sm">
        <Box sx={{ width: 500 }}>
          <BottomNavigation>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Box>
    </Container>
  )
}
export default App;