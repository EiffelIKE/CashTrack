import { Container } from '@/components/Container';
import { CurrencyFormCard } from '@/components/CurrencyCard';
import { CurrencyCardRef, CurrencyData } from '@/components/CurrencyCard/types';
import { DraggableButton } from '@/components/DraggableButton';
import { Text, Title } from '@/components/Text';
import { useActiveCurrencies } from '@/hooks/useActiveCurrencies';
import { useAvailableCurrencies } from '@/hooks/useAvailableCurrencies';
import { usePlatform } from '@/hooks/usePlatform';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { setAddHistory } from '@/store/slices/HistorySlice';
import { useThemeContext } from '@/Theme/context';
import { shareText } from '@/utils/shareText';

import { KeyboardAvoidView } from '@/components/KeyboardAvoidView';
import { SuccessModal } from '@/components/SuccessModal';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { generateTextFromTotal } from '@/utils/generateTextFromTotal';
import { getNewHistoryTrackfromTotal } from '@/utils/getNewHistoryTrackFromTotal';
import { useHeaderHeight } from '@react-navigation/elements';
import { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Checkbox, Menu } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//to-DO- add more danger actions info

export const HomeScreen = () => {
  const { isIos } = usePlatform();
  const headerHeight = useHeaderHeight();
  const { theme } = useThemeContext();
  const insets = useSafeAreaInsets();
  const { navigate } = useAppNavigation();
  const refs = useRef<Record<string, RefObject<CurrencyCardRef | null>>>({});
  const [anchor, setAnchor] = useState<{ x: number; y: number } | null>(null);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const curencies = useAvailableCurrencies();
  const {
    activeCurrencies,
    deleteActiveCurrency,
    addNewActiveCurrency,
    resetActiveCurrencies,
  } = useActiveCurrencies();

  const getTotal = () => {
    const allData: CurrencyData[] = [];
    activeCurrencies.forEach((currency) => {
      const ref = refs.current[currency.abbreviation];
      if (ref?.current) {
        allData.push(ref.current.getData());
      }
    });
    return allData;
  };

  const saveTrack = () => {
    const total = getTotal();
    const track = getNewHistoryTrackfromTotal({ total, activeCurrencies });
    dispatch(setAddHistory(track));
    setIsModalOpen(true);
  };

  const closeDraggMenu = () => setAnchor(null);
  const closeModal = () => setIsModalOpen(false);

  const clearAllDenominations = () => {
    activeCurrencies.forEach((currency) => {
      const ref = refs.current[currency.abbreviation];
      if (ref?.current) {
        ref.current.clear();
      }
    });
  };

  const createTextFromTotal = () => {
    const total = getTotal();
    return generateTextFromTotal(total);
  };

  useEffect(() => {
    activeCurrencies.forEach((currency) => {
      if (!refs.current[currency.abbreviation]) {
        refs.current[currency.abbreviation] = createRef<CurrencyCardRef>();
      }
    });
  }, []);

  return (
    <>
      <KeyboardAvoidView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
          keyboardDismissMode="on-drag"
          style={{ flex: 1 }}
        >
          <Container
            style={{
              gap: 24,
              position: 'relative',
              paddingVertical: insets.bottom + 24,
            }}
          >
            <Title>Select curencies to use:</Title>
            <View style={{ gap: 12 }}>
              {curencies.map((currency) => {
                const { name, abbreviation } = currency;
                const isChecked = activeCurrencies.some(
                  (curr) => curr.abbreviation === abbreviation
                );

                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '50%',
                    }}
                    key={abbreviation}
                  >
                    <Checkbox
                      status={isChecked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        if (isChecked) {
                          deleteActiveCurrency(abbreviation);
                          refs.current[currency.abbreviation] = null;
                        } else {
                          addNewActiveCurrency(currency);
                          refs.current[currency.abbreviation] =
                            createRef<CurrencyCardRef>();
                        }
                      }}
                    />
                    <Text>
                      {name} - {abbreviation}
                    </Text>
                  </View>
                );
              })}
            </View>
            {activeCurrencies.length > 0 ? (
              <View style={{ gap: 24 }}>
                <Title>Track currencies:</Title>
                <View style={{ gap: 32 }}>
                  {activeCurrencies.map((currency, index, arr) => {
                    return (
                      <CurrencyFormCard
                        currency={currency}
                        key={currency.abbreviation}
                        ref={refs.current[currency.abbreviation]}
                      />
                    );
                  })}
                </View>
              </View>
            ) : (
              <Text style={{ color: theme.paperTheme.colors.primary }}>
                * Select at least one currency to track
              </Text>
            )}
          </Container>
        </ScrollView>
      </KeyboardAvoidView>
      {activeCurrencies.length > 0 && (
        <DraggableButton onPress={setAnchor} isDraggable={!anchor} />
      )}
      {
        <Menu
          elevation={3}
          visible={Boolean(anchor)}
          onDismiss={closeDraggMenu}
          anchor={anchor}
        >
          <Menu.Item
            onPress={() => {
              saveTrack();
              closeDraggMenu();
            }}
            title="Save"
            leadingIcon="content-save"
          />
          <Menu.Item
            onPress={() => {
              clearAllDenominations();
              closeDraggMenu();
            }}
            title="Clear denominations"
            leadingIcon="delete"
          />
          <Menu.Item
            onPress={() => {
              resetActiveCurrencies();
              closeDraggMenu();
            }}
            title="Clear all"
            leadingIcon="delete-forever"
          />
          <Menu.Item
            onPress={() => {
              shareText(createTextFromTotal());
              closeDraggMenu();
            }}
            title="Share"
            leadingIcon="share"
          />
        </Menu>
      }
      <SuccessModal
        primaryAction={{
          onPress: () => {
            closeModal();
          },
          label: 'Ok',
        }}
        secondaryAction={{
          onPress: () => {
            closeModal();
            navigate('History');
            resetActiveCurrencies();
          },
          label: 'See History',
        }}
        visible={isModalOpen}
        onDismiss={closeModal}
        title="Cash-Track saved in history!"
      />
    </>
  );
};
