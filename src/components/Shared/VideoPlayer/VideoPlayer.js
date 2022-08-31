import * as React from 'react';
import { Button, Container, Grid, IconButton, Slider, Toolbar, Tooltip, Typography, SliderValueLabelProps } from '@mui/material';
import ReactPlayer from 'react-player';
import { makeStyles } from '@mui/styles';
import { Bookmark, FastForward, FastRewind, PlayArrow, VolumeUp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';




const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    position: "relative"
  },
  controlWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zindex: 1,
  },
  controlIcons: {
    color: "#777",
    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    }
  },
  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#fff",
    }
  },
  volumeSlider: {
    width: 100
  }
})

const PrettoSlider = styled(Slider)({
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const VideoPlayer = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar />
      <Container maxWidth="md">
        <div className={classes.playerWrapper}>
          <ReactPlayer
            width={"100%"}
            height="100%"
            url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
            muted={true}
            playing={true}
          />
          <div className={classes.controlWrapper}>

            {/*Top Control */}

            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              style={{ padding: 16 }}>
              <Grid item>
                <Typography variant='h5' style={{ color: "#fff" }}>Video Title</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='container'
                  color='primary'
                  startIcon={<Bookmark />}
                >
                  Bookmark
                </Button>
              </Grid>
            </Grid>

            {/*Middle Controls*/}

            <Grid
              container direction="row" alignItems="center" justifyContent="center">
              <IconButton
                className={classes.controlIcons}
                aria-label="rewind">
                <FastRewind
                  fontSize="inherit"
                />
              </IconButton>
              <IconButton
                className={classes.controlIcons}
                aria-label="rewind">
                <PlayArrow
                  fontSize="inherit"
                />
              </IconButton>
              <IconButton
                className={classes.controlIcons}
                aria-label="rewind">
                <FastForward
                  fontSize="inherit"
                />
              </IconButton>
            </Grid>

            {/* Bottom controls */}
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              style={{ padding: 16 }}
            >
              <Grid item xs={12}>
                <PrettoSlider
                  min={0}
                  max={100}
                  defaultValue={0}
                  ValueLabelComponent={ValueLabelComponent}
                  valueLabelDisplay="auto"
                  
                />
              </Grid>
              <Grid item >
                <Grid container alignItems="center" direction="row" >
                  <IconButton className={classes.bottomIcons}>
                    <PlayArrow fontSize="large" />
                  </IconButton>
                  <IconButton className={classes.bottomIcons}>
                    <VolumeUp fontSize="large" />
                  </IconButton>
                  <Button variant="text" style={{ color: "#fff", marginLeft: 16 }}>
                    <Typography>05.05</Typography>

                  </Button>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />


                </Grid>
              </Grid>
            </Grid>

          </div>
        </div>

      </Container>
    </>
  )


};

export default VideoPlayer;