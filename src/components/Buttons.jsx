'use client';
import Button from '@mui/material/Button';
import Link from "next/link";

const Buttons = ({item,link}) => {
  const isExternal = link.startsWith('http://') || link.startsWith('https://');
  return (
      <Button 
      variant="outlined" 
      sx={{ 
        color: '#ffffff',                  /* White text */
        borderColor: '#671E58',            /* Dark gray border (zinc-700) */
        fontFamily: 'var(--font-montserrat)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        fontSize: '0.75rem',
        padding: '8px 20px',
        borderRadius: '9999px',            /* Pill shape */
        '&:hover': {
          borderColor: '#ffffff',          /* Bright white border on hover */
          backgroundColor: 'rgba(255, 255, 255, 0.08)', /* Subtle transparent white hover fill */
        },
      }}
    >
      <Link  
      
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined} href={`${link}`}>{item}</Link>
    </Button>
  )
}

export default Buttons