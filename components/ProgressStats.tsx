import { createSettingsStyles } from '@/assets/styles/settings.styles'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'



const ProgressStats = () => {
    const { colors } = useTheme()

    const settingsStyles = createSettingsStyles(colors)

    const todos = useQuery(api.todos.getTodos);
    const completedCount = todos ? todos.filter((todo => todo.isCompleted)).length : 0;
    const totalCount = todos ? todos.length : 0;
    const activeCount = totalCount - completedCount;

    return (
        <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
            <Text style={settingsStyles.sectionTitle}>Progress Stats</Text>

            <View style={settingsStyles.statsContainer}>
                {/* 01 Total Todos*/}
                <LinearGradient
                    colors={colors.gradients.background}
                    style={[settingsStyles.statCard, { borderColor: colors.primary }]}
                >
                    <View style={settingsStyles.statIconContainer}>
                        <LinearGradient colors={colors.gradients.primary} style={settingsStyles.statIcon}>
                            <Ionicons name="list" size={20} color="#fff" />
                        </LinearGradient>
                    </View>

                    <View>
                        <Text style={settingsStyles.statNumber}>{totalCount}</Text>
                        <Text style={settingsStyles.statLabel}>Total Todos</Text>
                    </View>
                </LinearGradient>

                {/* 02 Completed Todos*/}
                <LinearGradient
                    colors={colors.gradients.background}
                    style={[settingsStyles.statCard, { borderColor: colors.success }]}
                >
                    <View style={settingsStyles.statIconContainer}>
                        <LinearGradient colors={colors.gradients.success} style={settingsStyles.statIcon}>
                            <Ionicons name="checkmark-circle" size={20} color="#fff" />
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={settingsStyles.statNumber}>{completedCount}</Text>
                        <Text style={settingsStyles.statLabel}>Completed</Text>
                    </View>
                </LinearGradient>

                {/* 03 Active Todos*/}
                <LinearGradient
                    colors={colors.gradients.background}
                    style={[settingsStyles.statCard, { borderColor: colors.warning}]}
                >
                    <View style={settingsStyles.statIconContainer}>
                        <LinearGradient colors={colors.gradients.warning} style={settingsStyles.statIcon}>
                            <Ionicons name="time" size={20} color="#fff" />
                        </LinearGradient>
                    </View>
                    <View>
                        <Text style={settingsStyles.statNumber}>{totalCount}</Text>
                        <Text style={settingsStyles.statLabel}>Active</Text>
                    </View>
                </LinearGradient>
            </View>
        </LinearGradient>
    )
}

export default ProgressStats