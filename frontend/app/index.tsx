import { AreaChart, Grid, ProgressCircle } from "react-native-svg-charts";

export default function Index() {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <AreaChart
      style={{ height: 200 }}
      data={data}
      contentInset={{ top: 30, bottom: 30 }}
      svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
    >
      <Grid />
    </AreaChart>
  );
}