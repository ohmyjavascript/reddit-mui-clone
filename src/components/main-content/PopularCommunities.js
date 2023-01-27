import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { popularCommunityItems } from '@data/app.data';
import { Box } from '@mui/system';
import { Button, Link } from '@mui/material';
import {
  accordionHeader,
  tagLinks,
  flexWrap,
  showMoreLinkBtn,
} from '@styles/styles';

const PopularCommunities = () => {
  const [options, setOptions] = React.useState(popularCommunityItems);
  const [more, setMore] = React.useState(false);

  const showMore = () => {
    setMore((v) => !v);
  };

  const renderTags = (content) => {
    return (
      <React.Fragment>
        {content.slice(0, more ? content.length : 10).map((item) => (
          <Link key={item} sx={tagLinks} href="#">
            {item}
          </Link>
        ))}
      </React.Fragment>
    );
  };
  return (
    <div>
      {options.map((option) => {
        return (
          <Accordion disableGutters key={option.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="overline" sx={accordionHeader}>
                {option.header}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={flexWrap}>{renderTags(option.content)}</Box>
              <Button sx={showMoreLinkBtn} onClick={showMore}>
                {more ? 'Less' : 'See more'}
              </Button>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default PopularCommunities;
