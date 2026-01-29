import ServicesSection from '@/components/services/ServicesSection'
import HeroServices from '@/components/services/HeroServices'
import { Box } from '@mui/material'
import React from 'react'

export default function page() {
  return (
    <Box>
        <HeroServices />
        <ServicesSection/>
    </Box>
  )
}
