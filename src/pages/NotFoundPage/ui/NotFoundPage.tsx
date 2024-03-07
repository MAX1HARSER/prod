import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation('not_found');

    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;
