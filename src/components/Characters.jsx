import React from 'react';
import anonImage from '../image/anon.png';
import preloader from '../image/preloader.svg';
import { mdiDotsHorizontal, mdiTrashCanOutline } from '@mdi/js';
import Icon from '@mdi/react';
import DropdownMenu from './Dropdown';
import Like from './Like';

export default class Characters extends React.Component {

  render() {

    return (
      <div className="characters__list" style={{ margin: this.props.characters.length > 0 ? "0px" : "100px 0px 100px 0px" }}>
        {
          this.props.characters.length > 0 
          ? this.props.characters.map((ch) =>
            <div className="character__card">
              <div className="character__characterName">
                {ch.name}
              </div>
              <div className="character__personalInfo">
                <ul>
                  <li>Прозвище: {ch.nickname}</li>
                  <li>Дата рождения: {ch.birthdate}</li>
                  <li>Появлялся в сезонах: {ch.appearedIn.length > 0 ? ch.appearedIn.join(', ') : " - "}</li>
                  <li>Исполнитель роли: {ch.actor}</li>
                </ul>
              </div>
              <div className="character__photo">
                <img className="character__image" src={ch.image} alt={anonImage} />
              </div>
              <div className="character__delete">
                <DropdownMenu
                  items={[
                    {
                      id: 'delete',
                      display: (
                        <button>
                          Удалить карточку <Icon size="1.5em" path={mdiTrashCanOutline} />
                        </button>
                      ),
                      onClick: () => this.props.deleteCharacter(ch.id),
                    },
                  ]}
                  path={mdiDotsHorizontal}
                />
              </div>
              <div className="character__vote">
                <Like index={ch.id} liked={this.props.likes.has(ch.id)} setCharacterLike={this.props.setCharacterLike} />
              </div>
            </div>
          )
          : this.props.isFetching 
            ? <img src={preloader} alt="Загрузка" />
            : "Нет карточек"
        }
      </div>
    );
  }
}