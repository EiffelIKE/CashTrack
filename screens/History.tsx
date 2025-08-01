import { Container } from '@/components/Container';
import { Title } from '@/components/Text';
import { TrackDetails } from '@/components/TrackDetails';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { useHistoryTracks } from '@/hooks/useHistoryTracks';
import { CurrencyWithDenominationAmounts } from '@/types/currency';
import { shareText } from '@/utils/shareText';
import { sortByModifiedDateSafe } from '@/utils/sortByModifiedDate';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function HistoryScreen() {
  const { navigate } = useAppNavigation();
  const insets = useSafeAreaInsets();
  const { deleteHisotry, cloneFromHistory, historyTracks } = useHistoryTracks();

  const sortedByDates = sortByModifiedDateSafe(historyTracks, 'desc');

  const handleClone = (activeCurrencies: CurrencyWithDenominationAmounts[]) => {
    cloneFromHistory(activeCurrencies);
    navigate('Home')
  };

  return (
    <>
      <Container style={{ gap: 24 }}>
        <ScrollView
          style={{ height: '100%' }}
          contentContainerStyle={{
            gap: 24,
            paddingTop: 24,
            paddingBottom: insets.bottom + 24,
          }}
        >
          <Title>
            {' '}
            {historyTracks.length > 0
              ? 'Latest Cash-Tracks:'
              : 'No history found'}{' '}
          </Title>
          <View style={{ gap: 12 }}>
            {sortedByDates.map(({ modificationDate, id, activeCurrencies }) => {
              return (
                <TrackDetails
                  key={id + modificationDate}
                  activeCurrencies={activeCurrencies}
                  modificationDate={modificationDate}
                  handleShare={shareText}
                  deleteHisotry={() => deleteHisotry(id)}
                  handleClone={handleClone}
                />
              );
            })}
          </View>
        </ScrollView>
      </Container>
    </>
  );
}
