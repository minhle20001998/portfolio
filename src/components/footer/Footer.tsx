import React from 'react';
import {
  BellIcon,
  ErrorIcon,
  FeedbackIcon,
  RemoteIcon,
  WarningIcon
} from '../../assets/icons/dark';
import { FooterWrapper } from './Footer.styled';

export function Footer() {
  return (
    <FooterWrapper>
      <div className="remote-wrapper">
        <RemoteIcon />
      </div>
      <div className="left-status-bar">
        <div className="status-problems">
          <ErrorIcon />
          <span>0</span>
          <WarningIcon />
          <span>0</span>
        </div>
        <div className="right-status-bar">
          <div className="keyboard-layout">
            <span>Layout: VN</span>
          </div>
          <div>
            <FeedbackIcon />
          </div>
          <div>
            <BellIcon />
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}
