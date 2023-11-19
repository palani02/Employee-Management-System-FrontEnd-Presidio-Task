import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { MyContext } from '../hook/employee';
import { Button } from '@mui/material';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
    const {openAddCard,setOpenAddCard,setData} = React.useContext(MyContext);
    const [name,setname] = React.useState(null);
    const handleChange = (e)=>{
    setname(e.target.value);
    }
    const handleSearch = ()=>{
      axios.get(`http://localhost:8080/api/v1/employee/user?name=${name}&size=${10}`)
      .then(res=>setData(res.data));
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ALL EMPLOYEES
          </Typography>

          <Typography
          variant="h6"
          noWrap
          component="div"
          className='rounded-md border-2 border-white px-[1rem] py-0 cursor-pointer'
          sx={{display: { xs: 'none', sm: 'block' }}}
          onClick={()=>console.log("hi")}
          >
              Add <AddIcon/>

          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            className='rounded-lg'
            onChange={handleChange}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
              <button  className={`border-2 border-black px-[1rem] py-[0.5rem]  text-white bg-black ml-[2rem] `} onClick={handleSearch} disabled={(name==null || name=="" )} >Search</button>
          </Search>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}