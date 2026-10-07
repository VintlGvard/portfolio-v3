'use client';

import { Component, type ReactNode } from 'react';
import SkillFallbackGrid from '@/components/SkillFallbackGrid';

export class TechCloudErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return <SkillFallbackGrid />;
    return this.props.children;
  }
}
