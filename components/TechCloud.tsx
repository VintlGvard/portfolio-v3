'use client';

import { memo } from 'react';
import { Cloud, type ICloud } from 'react-icon-cloud';
import { TECH_ICONS } from '@/lib/tech-icons';

const CLOUD_PROPS: Omit<ICloud, 'children'> = {
  containerProps: {
    className: 'flex items-center justify-center w-full h-full',
  },
  canvasProps: {
    style: {
      width: '100%',
      maxWidth: '100%',
    },
  },
  options: {
    reverse: true,
    depth: 0.8,
    wheelZoom: false,
    imageScale: 2.4,
    activeCursor: 'default',
    initial: [0.1, -0.1],
    outlineColour: '#0000',
    maxSpeed: 0.02,
    minSpeed: 0.01,
    dragControl: true,
    dragThreshold: 4,
    pinchZoom: true,
    freezeActive: true,
    shuffleTags: true,
  },
};

const ICON_ELEMENTS = TECH_ICONS.map((icon) => (
  <a
    key={icon.slug}
    href={`https://simpleicons.org/?q=${icon.slug}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={icon.title}
  >
    <img
      height={52}
      width={52}
      src={icon.src}
      alt={icon.title}
      decoding="async"
      draggable={false}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  </a>
));

const TechCloud = memo(function TechCloud() {
  return <Cloud {...CLOUD_PROPS}>{ICON_ELEMENTS}</Cloud>;
});

export default TechCloud;
