import * as React from 'react';
import { Annotation as A  } from '../../client-api/annotation_pb';

type Props = A.AsObject;

const Annotation: React.SFC<Props> = ({
  Location,
  Description,
  PageX,
  PageY,
}) => (
  <div style={{ left: PageX, top: PageY, position: 'absolute' }}>
    {Location}
    {Description}
    {PageX}
    {PageY}
  </div>
);

export default Annotation;
