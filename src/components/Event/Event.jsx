import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
// коли ми вказуємо просто папку (відносно src), то система, заходячи в цю папку одразу
// шукає файл index.js, а в цьому файлі лежать реекспорти
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constants';
import PropTypes from 'prop-types';
import css from './Event.module.css';
import { Card, Chip, EventName, Info } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  // // css - це об'єкт css, який ми імпортуємо із css-модуля
  // // в ньому ключ - цн оригінальне ім'я класу, а значення - це вже обфускований, унікалізований клас
  // console.log(css)
  // // type  це тип події, яка приходить і бекенду (може бути три типи подій: free, paid і vip)
  // // і в залежності від типу події, ми обираємо необхідний нам клас із об'єкту css
  // // якщо значення властивості лежить в змінній, то ми стукаємось до нього
  // // через квадратні дужки
  // console.log(css[type])
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {formattedStart}
      </Info>
      <Info>
        <FaClock className={css.icon} size={iconSize.sm} />
        {duration}
      </Info>
      {/* і тут додатково до класу chip додаємо клас типу події, щоб відповідно */}
      {/* стилізувати елемент. Робимо цн через шаблонну строку. */}
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

// className={`${css.chip} ${css[type]}`}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
