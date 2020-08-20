import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';

interface GlobalState {
    token: string | null;
}

const { useGlobalState } = createGlobalState<GlobalState>({token: null});

export const useToken = () => useGlobalState('token');