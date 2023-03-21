import type { ToolbarChipGroup } from '@patternfly/react-core';
import { FilterPathsType } from 'api/filters/filter';
import type { Query } from 'api/queries';
import messages from 'locales/messages';
import React from 'react';
import { useIntl } from 'react-intl';
import { DataToolbar } from 'routes/components/data-toolbar';
import type { Filter } from 'routes/utils/filter';

interface DetailsFilterToolbarOwnProps {
  groupBy: string; // Options for category menu
  isDisabled?: boolean;
  isExportDisabled?: boolean; // Sync category selection with groupBy value
  onExportClicked();
  onFilterAdded(filter: Filter);
  onFilterRemoved(filter: Filter);
  pagination?: React.ReactNode; // Optional pagination controls to display in toolbar
  query?: Query; // Query containing filter_by params used to restore state upon page refresh
}

type DetailsFilterToolbarProps = DetailsFilterToolbarOwnProps;

const DetailsFilterToolbar: React.FC<DetailsFilterToolbarProps> = ({
  groupBy,
  isDisabled,
  isExportDisabled,
  onExportClicked,
  onFilterAdded,
  onFilterRemoved,
  pagination,
  query,
}) => {
  const intl = useIntl();
  const getCategoryOptions = (): ToolbarChipGroup[] => {
    return [
      { name: intl.formatMessage(messages.filterByValues, { value: 'product' }), key: 'product' },
      { name: intl.formatMessage(messages.filterByValues, { value: 'affiliate' }), key: 'affiliate' },
      { name: intl.formatMessage(messages.filterByValues, { value: 'source_of_spend' }), key: 'source_of_spend' },
    ];
  };

  return (
    <DataToolbar
      categoryOptions={getCategoryOptions()}
      filterPathsType={FilterPathsType.detailsFilter}
      groupBy={groupBy}
      isDisabled={isDisabled}
      isExportDisabled={isExportDisabled}
      onExportClicked={onExportClicked}
      onFilterAdded={onFilterAdded}
      onFilterRemoved={onFilterRemoved}
      pagination={pagination}
      query={query}
    />
  );
};

export { DetailsFilterToolbar };
