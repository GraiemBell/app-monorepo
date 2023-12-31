import { Button, XStack } from '@onekeyhq/components';

type IProps = {
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonText?: string;
  confirmButtonProps?: Omit<React.ComponentProps<typeof Button>, 'children'>;
};

function SendActions(props: IProps) {
  const { onConfirm, onCancel, confirmButtonText, confirmButtonProps } = props;
  return (
    <XStack space="$4">
      <Button flex={1} onPress={onCancel}>
        Cancel
      </Button>
      <Button
        flex={1}
        variant="primary"
        onPress={onConfirm}
        {...confirmButtonProps}
      >
        {confirmButtonText || 'Confirm'}
      </Button>
    </XStack>
  );
}
export { SendActions };
