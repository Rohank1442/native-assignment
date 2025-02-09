import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';

const PaginatedFlatList = ({
    limit,
    handleClearDataOnRefresh,
    loadData = async () => ({page: 1, totalPages: 1}),
    ...props
}) => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    const handleFetchMoreData = async () => {
        const data = await loadData(page + 1, limit);
        setPage(data?.page);
        setTotalPages(data?.totalPages);
    };

    const handleRefresh = async () => {
        setLoading(true);
        handleClearDataOnRefresh();
        const data = await loadData(1, limit);
        setPage(data?.page);
        setTotalPages(data?.totalPages);
        setLoading(false);
    };

    const handleOnEndReached = async () => {
        if (page < totalPages && !loading) {
            setLoading(true);
            await handleFetchMoreData();
            setLoading(false);
        }
    };

    const initialFetch = useCallback(async () => {
        setLoading(true);
        try {
            const data = await loadData(1, limit);
            setPage(data?.page);
            setTotalPages(data?.totalPages);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, [setPage, setTotalPages, loadData, setLoading]);

    useEffect(() => {
        if (props?.data?.length === 0) {
            initialFetch();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <FlatList
            onEndReached={handleOnEndReached}
            onEndReachedThreshold={0.2}
            onRefresh={handleRefresh}
            refreshing={loading}
            contentContainerStyle={{flexGrow: props.data?.length > 0 ? 0 : 1}}
            {...props}
            ListEmptyComponent={loading ? undefined : props.ListEmptyComponent}
        />
    );
};

export default PaginatedFlatList;
