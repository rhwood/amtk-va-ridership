import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyRidershipChart, VPRAStats } from '@app/utils/MultiYearChart'
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content'

const RichmondBus: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Richmond Express Bus Corridor</Title>
    <Content>
      <Title headingLevel="h3">Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: VPRAStats): number => row.RichmondBus} startYear={2026} />
      <Title headingLevel={ContentVariants.h3}>Notes</Title>
      <Content component="ul" isPlainList>
        <Content component="li">Supplemental bus service for Richmond started in March 2026.</Content>
        <Content component="li">On Time Performance is not provided for Express Bus routes.</Content>
      </Content>
    </Content>
  </PageSection>
)

export { RichmondBus };
