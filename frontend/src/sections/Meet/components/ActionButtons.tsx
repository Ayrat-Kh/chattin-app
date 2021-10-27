import Button from '@frontend/components/Button/Button';
import React from 'react';
import Camera from '/public/static/icons/camera.svg';
import CameraOff from '/public/static/icons/cameraOff.svg';
import Mic from '/public/static/icons/mic.svg';
import MicOff from '/public/static/icons/micOff.svg';
import SwitchToScreenSharing from '/public/static/icons/switchToScreenSharing.svg';

const ActionButtons: React.FC<ActionButtonsProps> = ({
  isCameraOff,
  isMicOff,
  onCameraChange,
  onScreenShare,
  onMicChange,
  onLeave,
}) => {
  return (
    <div className="h-40 bg-blue rounded-t-lg flex justify-center items-center gap-2">
      <Button
        Icon={isMicOff ? MicOff : Mic}
        rounded
        buttonType="semi-crystal"
        onClick={onMicChange}
      />
      <Button
        Icon={isCameraOff ? CameraOff : Camera}
        rounded
        buttonType="semi-crystal"
        onClick={onCameraChange}
      />
      <Button rounded buttonType="thertiary" onClick={onLeave}>
        Leave Room
      </Button>
      <Button
        Icon={SwitchToScreenSharing}
        rounded
        buttonType="semi-crystal"
        onClick={onScreenShare}
      />
    </div>
  );
};

export default ActionButtons;

export type ActionButtonsProps = {
  isCameraOff: boolean;
  isMicOff: boolean;
  onCameraChange: () => void | Promise<void>;
  onScreenShare: () => void | Promise<void>;
  onMicChange: () => void | Promise<void>;
  onLeave: () => void | Promise<void>;
};
