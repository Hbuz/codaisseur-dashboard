import * as React from 'react'
import Group2 from '../assets/Group2.svg'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { HexGrid, Layout, Hexagon, Text, Pattern, GridGenerator, Path, Hex } from 'react-hexgrid';
import './layout/Funny.css';

class FunnyContainer extends React.PureComponent {

  render() {
    return <Query
      query={gql`
        {
          getAllFunnies {
            item
            count
          }
        }
        `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        console.log("RESS: " + JSON.stringify(data));

        const hexagonSize = { x: 30, y: 30 };
        // const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2);
        // const moreHexas = GridGenerator.ring(5, 7);
        return (
          <div>
            <h2>React Hexgrid v1</h2>
            <p>Constructing Hexgrid with component-based approach with custom SVG elements.</p>
            <HexGrid width={1200} height={800} viewBox="-50 -40 100 100">
              {/* Main grid with bit hexagons, all manual */}
              <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                <Hexagon q={0} r={0} s={0} fill="pat-1">
                  <Text x={0} y={18} >1, -1, 0</Text>
                  <Text x={0} y={-18}>1, -1, 0</Text>
                </Hexagon>

                {/* Using pattern (defined below) to fill the hexagon */}
                {/*  <Hexagon q={0} r={-1} s={1} />
                <Hexagon q={0} r={1} s={-1} />
                <Hexagon q={1} r={-1} s={0}>
                  <Text>1, -1, 0</Text>
                </Hexagon>
                <Hexagon q={1} r={0} s={-1}>
                  <Text>1, 0, -1</Text>
                </Hexagon> */}
                {/* Pattern and text */}
                {/*  <Hexagon q={-1} r={1} s={0}>
                  <Text>-1, 1, 0</Text>
                </Hexagon>
                <Hexagon q={-1} r={0} s={1} />
                <Hexagon q={-2} r={0} s={1} /> */}
                {/* <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} /> */}

              </Layout>

              {/* Additional small grid, hexagons generated with generator */}
              {/* <Layout size={{ x: 2, y: 2 }} origin={{ x: 50, y: -30 }}>
                {moreHexas.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />)}
              </Layout> */}
              {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
              <Pattern id="pat-1" size={{x: 30, y: 26}} link={Group2} />
              {/* <Pattern id="pat-1" link="http://lorempixel.com/400/400/cats/1/" size={hexagonSize} /> */}
              {/* <Pattern id="pat-2" link="http://lorempixel.com/400/400/cats/2/" size={hexagonSize} /> */}
            </HexGrid>
          </div>
        );

        // return data.getAllFunnies.map((funny) => (
        //   <div>
        //     <div>
        //       <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
        //         {/* Grid with manually inserted hexagons */}
        //         <Layout size={{ x: 1, y: 1 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
        //           <Hexagon q={0} r={0} s={0} >
        //             <Text>1, -1, 0</Text>
        //           </Hexagon>
        //         </Layout>
        //       </HexGrid>
        //     </div>
        //     <div key={funny.item}>
        //       <Funny funny={funny} />
        //     </div>
        //   </div>
        // ));
      }}

    </Query>
  }
}


export default FunnyContainer