import PropTypes from 'prop-types';
import {
  StatSection,
  StatHeader,
  StatList,
  StatListItem,
  StatPercentage,
} from './Statistics.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <StatSection>
      <StatHeader>{title}</StatHeader>
      <StatList>
        {stats.map(stats => (
          <StatListItem key={stats.id}>
            <span>{stats.label}</span>
            <StatPercentage>{stats.percentage}%</StatPercentage>
          </StatListItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
