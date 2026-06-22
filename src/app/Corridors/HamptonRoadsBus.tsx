import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyRidershipChart, VPRAStats } from '@app/utils/MultiYearChart'
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content'

const HamptonRoadsBus: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Hampton Roads Express Bus Corridor</Title>
    <Content>
      <Title headingLevel="h3">Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: VPRAStats): number => row.HamptonRoadsBus} startYear={2026} />
      <Title headingLevel={ContentVariants.h3}>Notes</Title>
      <Content component="ul" isPlainList>
        <Content component="li">Supplemental bus service for Hampton Roads started in January 2026.</Content>
        <Content component="li">On Time Performance is not provided for Express Bus routes.</Content>
      </Content>
    </Content>
  </PageSection>
)

export { HamptonRoadsBus };
