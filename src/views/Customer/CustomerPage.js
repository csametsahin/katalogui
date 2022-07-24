import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import './CustomerPage.css';



const tiers = [
  {
    title: 'Başlangıç ',
    price: '200₺',
    description: [
      '10 İlan Açma Şansı',
      '2 GB veri depolama desteği',
      'Yardım Merkezi desteği',
      'Email desteği',
    ],
    buttonText: 'Satın Al',
    buttonVariant: 'outlined',
  },
  {
    title: 'Profosyonel',
    subheader: 'En Popüler',
    price: '500₺',
    description: [
      '20 İlan Açma Şansı',
      '10 GB veri depolama desteği',
      'Yardım Merkezi desteği',
      'Email desteği',
    ],
    buttonText: 'Satın Al',
    buttonVariant: 'outlined',
  },
  {
    title: 'Enterprise',
    price: '1000₺',
    description: [
      'Sınırsız İlan Açma Şansı',
      'Sınırsız veri depolama desteği',
      'Yardım Merkezi desteği',
      'Email desteği',
    ],
    buttonText: 'Satın Al',
    buttonVariant: 'outlined',
  },
];
export default function CustomerPage() {
  const [isLogin, setIsLogin] = React.useState(false);
  
  return (
    <div className='sayfa   '>
      {!isLogin && <div>
        <Container disableGutters maxWidth="sm" component="main" sx={{  pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Ödeme Planları
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Size uygun ödeme planını seçerek sisteme devam edebilirsiniz. Bir sorunuz var ise patibook@gmail.com adresinden bizlere ulaşabilirsiniz.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /ay
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
                  </div>
                  }
    </div>
  )
}
