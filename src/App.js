import React, { useState } from 'react'

import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Link,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { AuthProvider } from './components/Auth'
import links from './links'
import Routing from './Routing'
import ScrollTop from './components/ScrollTop'

import Image from './parima_logo_img.png'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  // header Styles
  header: {
  },
  bar: {
    background: 'linear-gradient(45deg, #77bb88 60%, #77bbdd 100%)'
  },
  title: {
    flex: 1,
    marginLeft: '8px'
  },
  link: {
    margin: theme.spacing(1, 1.5),
    '&:hover': {
      borderColor: '#77bb88',
      backgroundColor: '#77bb88'
    }
  },
  // main Styles
  main: {
    backgroundColor: theme.palette.background.default
  },
  container: {
    padding: 0
  },
  box: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4)
  },
  // footer Styles
  footer: {
  },
  text: {
    marginTop: theme.spacing(5)
  }
}))



export default () => {
  const classes = useStyles()
  const [state, setState] = useState({
    left: false
  })

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {links.map((text, index) => (
          <Link color='inherit' href={text.link} underline='none'>
            <ListItem button key={text.title}>
              <ListItemText primary={text.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <AuthProvider>
      <div className={classes.root}>
        <CssBaseline />

        <header className={classes.header}>
          <AppBar className={classes.bar}>
            <Toolbar >
              <Link color='inherit' underline='none' href='/'>
                <img src={Image} alt="" width="50" height="50" />
              </Link>

              <Typography variant='h4' color='inherit' className={classes.title} noWrap>
                <Link color='inherit' underline='none' href='/'>
                  Parima
</Link>
              </Typography>

              <Button href='/player/:pid' color='inherit' variant='outlined' className={classes.link}>
                選手
          </Button>

              <Button href='/admin/:aid' color='inherit' variant='outlined' className={classes.link}>
                主催者
          </Button>
            </Toolbar>
          </AppBar>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
          <Toolbar id='back-to-top-anchor' />
        </header>

        <main>
          <Container maxWidth='md' className={classes.container} fixed>
            <Box borderRadius='borderRadius' border={3} borderColor='grey.100' className={classes.box}>
              <Routing />
            </Box>
          </Container>
        </main>

        <ScrollTop />

        <footer className={classes.footer}>
          <Typography variant='subtitle1' color='textSecondary' align='center' className={classes.text}>
            2019 created by Parima
        </Typography>
        </footer>

      </div>
    </AuthProvider>
  )
}
