import * as React from 'react';
import { Annotation as A } from '../client-api/annotation_pb';
import Annotation from './components/Annotation';

type Props = {
  annotations: A.AsObject[];
};

const View: React.SFC<Props> = ({ annotations }) => (
  <>
    {annotations.map((props: A.AsObject) => <Annotation {...props} />)}
  </>
);

const annotationAppender = (View: React.SFC<Props>) =>
class extends React.PureComponent<{}, Props> {
    state = {
      annotations: [] as A.AsObject[],
    }

    componentDidMount() {
      window.addEventListener('click', this.addNewAnnotation)
    }

    componentWillUnmount() {
      window.removeEventListener('click', this.addNewAnnotation)
    }

    addNewAnnotation: (event: any) => void = event => {
      const newAnnotation = {
        Location: window.location.href,
        Description: 'fill in',
        PageX: event.pageX,
        PageY: event.pageY,
      };
      this.setState({ annotations: this.state.annotations.concat([newAnnotation])});
    }

    render() {
      return (
        <View annotations={this.state.annotations} />
      );
    }

};

export default annotationAppender(View);
