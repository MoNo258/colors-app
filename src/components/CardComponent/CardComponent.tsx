import { Card, CardContent, CardMedia, SxProps, Theme, Typography, TypographyPropsVariantOverrides } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { OverridableStringUnion } from '@mui/types';
import React from 'react';
// import { Slide } from 'react-awesome-reveal';


interface CardComponentProps {
    header: string;
    body: string;
    sx?: SxProps<Theme>;
    image?: {
        src: string;
        alt: string;
    }
    delay?: number;
    variantHeader?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>
}

const CardComponent: React.FC<CardComponentProps> = React.memo(({ 
    header, body, delay, sx, variantHeader, image
}) => {
    return (
        // <Slide direction="up" delay={delay} triggerOnce >
            <Card
                sx={sx}
            >
                {image && image.src && image.alt && (   
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image.src}
                        title={image.alt}
                    />
                )}
                <CardContent>
                    <Typography variant={variantHeader || 'h5'} align='center'>
                        {header}
                    </Typography>
                    <Typography variant="body1" align='center'>
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        // </Slide>
    );
});


export default CardComponent;